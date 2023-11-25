const open = (id = '') => {
    document.getElementById('modalJS').setAttribute('modal', id)
    document.getElementById('modalJS').setAttribute('value', 'show')
    setTimeout(() => {
        document.getElementById('modalJS').click()
    }, 100)
}

const close = (id = '') => {
    document.getElementById('modalJS').setAttribute('modal', id)
    document.getElementById('modalJS').setAttribute('value', 'hide')
    document.getElementById('modalJS').click()
}

const modalData = () => {
    let id = document.getElementById('modalJS').getAttribute('modal')
    let value = document.getElementById('modalJS').getAttribute('value')
    return { id, value }
}

const modalModel = { open, close, modalData }
export default modalModel