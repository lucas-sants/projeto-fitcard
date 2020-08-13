
  function cnpjMask (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }
  
  export { }
  
  function phoneMask (value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  function agenciaMask (value) {  
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1')
  }

  function contaMask (value) {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1')

  }

  function dataMask (value) {
    return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(-\d{4})\d+?$/, '$1')
  
  }
  
  export { 
    cnpjMask, 
    phoneMask, 
    agenciaMask,
    contaMask,
    dataMask
  }