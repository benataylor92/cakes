import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-2_eo0FY3NOV',
    ClientId: '4lv29c83bl00svq4r9e4pf2k81'
};

export default new CognitoUserPool(poolData);