const selectDropdown = (networkInterface, index, propsNetworkInterface, propsSetNetworkInterface) => {
    return (
        <div
            className={networkInterface == propsNetworkInterface ? 'selectedDropdown' : 'selectDropdown'}
            key={index}
            onClick={() => {
                propsSetNetworkInterface(networkInterface)
            }}
        >
            {networkInterface}
            <br />
        </div>
    )
}

const Dropdown = (props) => {
    return (
        <>
            {
                props.networkInterfaces.map((networkInterface, index) => {
                    return (
                        selectDropdown(networkInterface, index, props.networkInterface, props.setNetworkInterface)
                    )
                })
            }
        </>
    )
}

export default Dropdown