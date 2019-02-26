const {
  bae,
  scorpion,
  broskies,
  lit,
  simp,
  idfwu,
  moreLife,
  savage,
  scary,
  other,
  all
} = require('../assets/quotes');

const getQuote = category => {
  switch (category) {
    case 'bae':
      return bae[Math.floor(Math.random() * bae.length)];
    case 'scorpion':
      return scorpion[Math.floor(Math.random() * scorpion.length)];
    case 'broskies':
      return broskies[Math.floor(Math.random() * broskies.length)];
    case 'lit':
      return lit[Math.floor(Math.random() * lit.length)];
    case 'idfwu':
      return idfwu[Math.floor(Math.random() * idfwu.length)];
    case 'moreLife':
      return moreLife[Math.floor(ath.random() * moreLife.length)];
    case 'savage':
      return savage[Math.floor(Math.random() * savage.length)];
    case 'simp':
      return simp[Math.floor(Math.random() * simp.length)];
    case 'scary':
      return scary[Math.floor(Math.random() * scary.length)];
    case 'other':
      return other[Math.floor(Math.random() * other.length)];
    default:
      return all[Math.floor(Math.random() * all.length)];
  }
};

module.exports = {
  getQuote
};
