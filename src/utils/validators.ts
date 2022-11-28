import { useDispatch } from 'react-redux';
// export const isValidObjField = (obj) => {
//     return Object.values(obj).every(value => value.trim())
// }

// export const updateError = (error, stateUpdater) => {
//     stateUpdater(error)
//     setTimeout(() => {
//         stateUpdater('')
//     }, 2500)
// }

export const isValidEmail = (value: string) => {
    const regx = /^([A-Za-z0-9_\~\.])+\@([A-Za-z0-9_\~\.])+\.([A-Za-z]{2,4})$/

    return regx.test(value)
}

export const isValidCpf = (value: string) => {
        if (value == '') {
            return true
        }

        let cpf = value.replace(/\./gi, '').replace(/-/gi, '')
        var isValid = true
        var sum
        var rest
        var i
        i = 0
        sum = 0

        if (
            cpf.length != 11 ||
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999'
        ) {
            isValid = false
        }

        for (i = 1; i <= 9; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
        }

        rest = (sum * 10) % 11

        if (rest == 10 || rest == 11) {
            rest = 0
        }

        if (rest != parseInt(cpf.substring(9, 10))) {
            isValid = false
        }

        sum = 0

        for (i = 1; i <= 10; i++) {
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
        }

        rest = (sum * 10) % 11

        if (rest == 10 || rest == 11) {
            rest = 0
        }
        if (rest != parseInt(cpf.substring(10, 11))) {
            isValid = false
        }

        return isValid
    }