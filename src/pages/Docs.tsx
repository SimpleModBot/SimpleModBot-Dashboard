import { Appbar } from "../components/Appbar";
import { InputField } from "../utils/styles";

export function Docs() {
    return (
        <div>
            <div className="searchContainer">

            </div>
            <h1 style={{ textAlign: "center" }}>Documentation</h1>
            <div style={{
                maxWidth: "1000px",
                marginLeft: "25%"
            }}>
                <p style={{ textAlign: "center" }}>
                    Do you want to learn about a command the SMB has?
                    Maybe you want to know how a command works.
                    Use this page to find out information about SimpleModBot's commands. Here, you can find
                    <a href="#abc"  style={{
                        color: "#7265ff",
                    }}> a list of all of the commands in alphabetical order
                    </a>, 
                </p>
            </div>
                <h2 id="abc" style={{
                textAlign: "center",
                width: "fit-content",
                margin: "auto",
            }}>Commands</h2>
            <div style={{
                display: "flex",
            }}>

            </div>
        </div>
    );
}