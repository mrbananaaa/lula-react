import { Loader } from "react-feather"

const LoadingPage = () => {
  return (
    <div className="min-h-[85vh] flex justify-center items-center">
      <Loader size={42} className="animate-spin-slow" />
    </div>
  )
}

export default LoadingPage