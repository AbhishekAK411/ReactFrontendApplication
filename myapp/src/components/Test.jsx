import { useNavigate } from "react-router-dom";

const Test = () =>{

    const route = useNavigate();

    const handleUser = () =>{
        route("/user");
    }

    const handleAdmin = () =>{
        route("/admin");
    }

    return (
        <>
        <div>
            <button className="border-1 border-black m-10 bg-black" onClick={handleUser}>User</button>
            <button className="border-1 border-black m-10 bg-black" onClick={handleAdmin}>Admin</button>
        </div>
        </>
    )
}

export default Test;