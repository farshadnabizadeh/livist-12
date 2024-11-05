import { policyTypes } from './../data/policyTypes';
const doesThePolicyHavePlans = (
    productId: string,
    productTarifId: string,
    productVersionId: string,
    ) => {
    const policyType = policyTypes.find(policyType => (policyType.productId === productId && policyType.productTarifId === productTarifId && policyType.productVersionId === productVersionId ))
    return policyType?.multiplePlan ?? false
}

export default doesThePolicyHavePlans