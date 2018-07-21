import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb97Dc35527E4F977A8de4dD57f4D1b699F0525dE'
);

export default instance;