/* eslint-disable react/prop-types */

export default function Button(props) {
    const { text, func } = props;

  return (
    <button onClick={func} className="px-8 py-4 mx-auto rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200 mb-10">
        <p>{text}</p>
    </button>
  )
}
