function promessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bom dia')
            resolve()
        }, 2000)
    })
}

export default async function teste() {
    await promessa()
    console.log('Terminou')
}