export default function Input({ ...props }) {
  return {
    ...(props.richtext ? <textarea {...props} /> : <input {...props} />),
  };
}
