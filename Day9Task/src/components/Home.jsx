import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            HomePage
            <button
                onClick={() => {
                    navigate("/Order-Summary", { replace: true });
                }}>
                Click to go to order page
            </button>
        </div>
    );
};
