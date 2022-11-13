import { useState } from "react"
import networkInterfaces from '../../../data/getIFaceList.json'

import Dropdown from "./workstation/dropdown"
import Selected from "./workstation/selected"

const Workstation = () => {
    const [networkInterface, setNetworkInterface] = useState(networkInterfaces[0] ? networkInterfaces[0] : null)

    return (
        <div className="workstation">
            <div className="section">
                <div className="heading">Workstation</div>
            </div>
            <div className="section">
                <div className="innerSection">
                    <div className="heading">Available Network Interfaces: {networkInterfaces.length}</div>
                    <Dropdown
                        networkInterface={networkInterface}
                        networkInterfaces={networkInterfaces}
                        setNetworkInterface={setNetworkInterface}
                    />
                </div>
                <div className="innerSection">
                    <div className="heading">Selected Interface: {networkInterface ? networkInterface : 'None'}</div>
                    <Selected
                        networkInterface={networkInterface}
                        className='selectedSection'
                    />
                </div>
            </div>
            <div className="section">
                <div className="innerSection">
                    <div className="heading">Graph</div>
                </div>
            </div>
        </div>
    )
}

export default Workstation