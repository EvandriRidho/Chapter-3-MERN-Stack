const Articles = (props) => {
    const { title, desc } = props;
    const showAlertDetails = () => {
        alert("Anda Mengklik Article")
    }
    const alertButton = (e) => {
        e.stopPropagation()
        e.preventDefault()
        alert("Anda Mengklik Button")
    }
    return (
        <article onClick={showAlertDetails}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <form>
                <button onClick={alertButton} type="submit">Simpan Data</button>
            </form>
        </article>
    )
}

export default Articles;