import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen w-full bg-cyan">
      {/* <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Shopiee
          </h1>
        </div>
      </div> */}
      <div>
        <h1 className="text-4xl text-center mt-10 text-black font-extrabold tracking-tight">
          Welcome to <span className="text-blue">SHOPIEE</span>
        </h1>
      </div>
      <div className="flex flex-1 mt-10 items-center justify-center bg-cyan px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;