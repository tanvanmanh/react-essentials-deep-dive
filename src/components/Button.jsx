export default function Button({children, mode, ...props}) {
  return (
    <button className={mode} {...props}>
      {children}
    </button>
  )
}