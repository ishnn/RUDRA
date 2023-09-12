import TitleBar from "../components/TitleBar";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Battalions() {

    const data = [
        {
            "name": "1st Battalion",
            "location": "Fort Hood, TX",
            "commander": "LTC John Smith",
        }]

    return (
        <div>
            <TitleBar />
            <Navbar />
            <div>
                <h1>Battalions</h1>
                <Table data={data}/>
            </div>
        </div>
    )
}