import {NavLink} from "react-router-dom"
const Footer = ({ lightMode, task, setTask }) => {
  const normal =
    "flex px-4 py-4 placeholder-white-500  rounded-b justify-between items-center text-[14px]";

    const secondNormal = "flex md:hidden justify-center border-t-[12px] py-4"

    const itemsLeft = task.filter(x => x.completed === false)

    function clearCompleted () { 
      
    }

  return (
    <div>
      <div
        className={
          lightMode
            ? `bg-white text-black ${normal} `
            : `${normal} bg-gray-800 text-gray-400`
        }
      >
        <p>{itemsLeft.length} item left</p>
        <div className="hidden md:flex ">
          <NavLink to="/" className="focus:text-blue-500">All</NavLink>
          <NavLink to="/active" className="mx-2 focus:text-blue-500">Active</NavLink>
          <NavLink to="/completed" className="focus:text-blue-500" >Completed</NavLink>
        </div>
        <p>Clear Completed</p>
      </div>
      <div className={
          lightMode
            ? `bg-white text-black ${secondNormal} `
            : `${secondNormal} bg-gray-800 text-gray-400 border-t-gray-900`
        }>
        <NavLink to="/" className="focus:text-blue-500">All</NavLink>
        <NavLink to="/active" className="mx-3 focus:text-blue-500">Active</NavLink>
        <NavLink to="/completed" className="focus:text-blue-500">Completed</NavLink>
      </div>
    </div>
  );
};

export default Footer;
