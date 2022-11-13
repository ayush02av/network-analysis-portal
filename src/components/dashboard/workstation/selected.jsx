import networkInterfacesInfo from '../../../../data/getAllInfo.json'

const showSelected = (key, data, index, margin = 0) => {
    return (
        <div key={index} style={{
            marginLeft: `${margin}px`
        }}>
            <span style={{
                fontWeight: margin == 0 ? 'bold' : 'none'
            }}>
                {key}
                {(typeof (data) == 'number' || typeof (data) == 'string') && (
                    <>
                        : {data}
                    </>
                )}
            </span>
            {
                typeof (data) == 'object'
                &&
                Object.keys(data).map((key, index) => {
                    return (
                        showSelected(key, data[key], index, margin + 15)
                    )
                })
            }
        </div>
    )
}

const Selected = (props) => {
    return (
        <div className='selectedSection'>
            {
                props.networkInterface && networkInterfacesInfo[props.networkInterface]
                &&
                (
                    <>
                        {networkInterfacesInfo[props.networkInterface].info && (
                            <div className="selectedSectionInnerSection">
                                {showSelected('Info', networkInterfacesInfo[props.networkInterface].info, 0)}
                            </div>
                        )}
                        {networkInterfacesInfo[props.networkInterface].network && (
                            <div className="selectedSectionInnerSection">
                                {showSelected('Network', networkInterfacesInfo[props.networkInterface].network, 0)}
                            </div>
                        )}
                    </>
                )
            }
        </div >
    )
}

export default Selected