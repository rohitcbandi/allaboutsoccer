const Item = ({ item, model }) => {

    const gcp_address = '/'
    const itemLink = gcp_address + model + '/' + item.name

    return (
        <>
        <a href={itemLink}>{item.name}</a>
        <br></br>
        </>
    )
}
export default Item