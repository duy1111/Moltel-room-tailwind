import {Buffer} from 'buffer'
export const blobToBase64 = blob => new Buffer(blob,'base64').toString('binary')
export const fileToBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const render = new FileReader()
        render.readAsDataURL(file);
        render.onload = () => resolve(render.result)
    })
    
}
