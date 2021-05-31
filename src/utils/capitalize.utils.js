export const capitalize = (unformalString) => {
    if (typeof unformalString !== 'string') return ''
    return unformalString.charAt(0).toUpperCase() + unformalString.slice(1)
}