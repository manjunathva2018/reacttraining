

export const UPDATE_CURRENCY = 'UPDATE_CURRENCY'

export const changeCurrency = (code) =>{
    return {
        type: UPDATE_CURRENCY,  // this property is required, rest are optional
        code: code                // this property is optional 
    }
}
