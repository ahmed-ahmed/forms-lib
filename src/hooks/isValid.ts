import { useEffect, useMemo, useState } from "react";
import { IValidationProps } from "./IisValidParams";

const globaleValidationRules =
{
  'required': {
    isValid: (value, params) => Boolean(value),
    errorMessage: ({ title }) => `${title} is required`
  },
  'maxLength': {
    isValid: (value, params) => value?.length > params.maxLength,
    errorMessage: ({ maxLength }) => `Value cannot be longer than ${maxLength}`
  },
  'minLength': {
    isValid: (value, params) => value?.length < params.minLength,
    errorMessage: ({ minLength }) => `Value cannot be less than ${minLength}`
  },
  'regex': {
    isValid: (value, params) => params.regex.test(value),
    errorMessage: ({ title }) => `${title} is not in the valid format`
  }
}



export default function useIsValid(params) {
  const { schemaKey, value, schema, onValidationChange, validateImmediately, customValidations } = params;
  if (!schema) {
    return {
      error: false,
      errorMessage: ``,
      setIsDirty: () => { },
      isValid: true
    }
  }
  const { required, title, maxLength, minLength, regex, validations = [] } = schema

  if (schemaKey === 'orderItems') {
    debugger;
  }

  const allRules = { ...globaleValidationRules, ...customValidations }
  const appliedValidation = [];
  if (required) appliedValidation.push('required')
  if (maxLength) appliedValidation.push('maxLength')
  if (minLength) appliedValidation.push('minLength')
  if (regex) appliedValidation.push('regex')
  appliedValidation.push(...validations)

  // todo: change set dirty to start validation or something to indicate the start of validation
  const [isDirty, setIsDirty] = useState(false)
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    if (validateImmediately) {
      setIsDirty(validateImmediately)
    }
  }, [validateImmediately])

  const results = useMemo(() => {
    const results = {
      error: false,
      errorMessage: ``,
      setIsDirty,
      isValid
    }

    // if (!isDirty) return results

    const errors = []

    const customValidation = appliedValidation.some(v => {
      const isvalid = allRules[v].isValid(value, { title, maxLength, minLength, regex })
      if (!isvalid) {
        errors.push(allRules[v].errorMessage({ title, maxLength, minLength }))
        return true;
      }
      return false;
    })

    if (customValidation) {
      results.error = isDirty;
      results.errorMessage = errors.join('/n');
      results.isValid = false;
      onValidationChange && onValidationChange(schemaKey, results)
      setIsValid(false)

    } else {
      results.isValid = true
      onValidationChange && onValidationChange(schemaKey, results)
      setIsValid(true)
    }

    return results;
  }, [value, isDirty, validateImmediately])

  return {
    ...results,
  };
}
