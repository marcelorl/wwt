import { Field, useField } from 'formik';
import { FormGroup } from '@mui/material';

type FieldFormGroupProps = {
  field: string;
  type?: string;
};

export const FieldFormGroup = ({
  field,
  type = 'text',
}: FieldFormGroupProps) => {
  const [, meta] = useField(field);
  const hasError = meta.error && meta.touched;
  return (
    <FormGroup>
      <label htmlFor={field}>{field}</label>
      <Field name={field} type={type} id={field} />
      {hasError ? <div style={{ color: 'red' }}>{meta.error}</div> : null}
    </FormGroup>
  );
};
