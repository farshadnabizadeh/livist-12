import { InsuranceItemType } from "../types";
import ForeignerHealthIcon from '@/assets/images/icons/foreigner-health-icon.svg'
import TamamlayiciIcon from '@/assets/images/icons/tamamlayici-insurrance-icon.svg'
import SeyahatInssuranceIcon from '@/assets/images/icons/seyahat-insurrance-icon.svg'
import IncomingIcon from '@/assets/images/icons/incoming-insurrance-icon.svg'
import ImmIcon from '@/assets/images/icons/imm-insurance-icon.svg'
import KaskoIcon from '@/assets/images/icons/kasko-insurance-icon.svg'
import TrafficIcon from '@/assets/images/icons/trrafic-insurrance-icon.svg'
import DogumIcon from '@/assets/images/icons/dogum-insurance-icon.svg'
import DaskIcon from '@/assets/images/icons/dask-insurance-icon.svg'
import EvimGuvendeIcon from '@/assets/images/icons/evim-guvende-insurance-icon.svg'
import FerdiKazaIcon from '@/assets/images/icons/human-with-broken-arm.svg'
import PregnantWoman from '@/assets/images/icons/pregnant-woman-icon.svg'
import FamilyUnderUbrella from '@/assets/images/icons/family-under-umbrella.svg'
import AirPlanWithChekmark from '@/assets/images/icons/air-plan-with-checkmark.svg'
import Luggages from '@/assets/images/icons/luggages.svg'
import HacIcon from '@/assets/images/icons/hac-ve-umre-icon.svg'


import InsuranceLivist from '@/assets/images/icons/insurance-livist.svg'
import Healthcare from '@/assets/images/icons/Healthcare.svg'
import TravelInsurance from '@/assets/images/icons/Travel-insurance.svg'
import Aeroplane from '@/assets/images/icons/Aeroplane.svg'
import Insurance2 from '@/assets/images/icons/Insurance2.svg'
import Carinsurance from '@/assets/images/icons/Carinsurance.svg'
import FenderBender from '@/assets/images/icons/FenderBender.svg'
import Caregiver2 from '@/assets/images/icons/Caregiver2.svg'
import Building2 from '@/assets/images/icons/Building2.svg'
import HomeInsurance10 from '@/assets/images/icons/HomeInsurance10.svg'
const InsurranceItems: InsuranceItemType[] = [
    {
        label: 'Yabancı Sağlık',
        value: 'yabanci-sagilik',
        id: '0',
        Icon: InsuranceLivist,
        isActive: true,
        title: 'Yabancı Sağlık Sigortası',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: true
    },
    {
        label: 'Sağlık Turizmi Komplikasyon',
        value: 'saglik-turizm',
        id: '2',
        Icon: Healthcare,
        isActive: true,
        title: 'Sağlık Turizmi Komplikasyon Sigortası',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: true
    },
    {
        label: 'Seyahat Sağılık Sigortası',
        value: 'seyahat-sagilik-sigortasi',
        id: '3',
        Icon: TravelInsurance,
        isActive: true,
        title: 'Seyahat Sağılık Sigortası',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: true
    },
    {
        label: 'Tamamlayici Sigortası',
        value: 'tamamlayici-sigorta',
        id: '1',
        Icon: Aeroplane,
        isActive: true,
        title: 'Tamamlayici Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true
    },
    {
        label: 'IMM',
        value: 'imm',
        id: '4',
        Icon: Insurance2,
        isActive: true,
        title: '',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'Kasko Sigortası',
        value: 'kasko',
        id: '5',
        Icon: Carinsurance,
        isActive: true,
        title: 'Kasko Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'Trafik Sigortasi',
        value: 'trafik',
        id: '6',
        Icon: FenderBender,
        isActive: true,
        title: 'Trafik Sigortasi',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'Doğum Sigortası',
        value: 'dogum',
        id: '7',
        Icon: Caregiver2,
        isActive: true,
        title: 'Doğum Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'DASK Sigortası',
        value: 'dask-sigortasi',
        id: '8',
        Icon: Building2,
        isActive: true,
        title: 'DASK Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'Evim Güvende',
        value: 'ev',
        id: '9',
        Icon: HomeInsurance10,
        isActive: true,
        title: 'Evim Güvende',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: true


    },
    {
        label: 'Ferdi Kaza',
        value: 'ferdi-kaza',
        id: '10',
        Icon: FerdiKazaIcon,
        isActive: true,
        title: 'Ferdi Kaza',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: false
    },
    {
        label: 'Hamilelik Sigortası',
        value: 'hamilelik-sigortasi',
        id: '11',
        Icon: PregnantWoman,
        isActive: true,
        title: 'Hamilelik Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: false
    },
    {
        label: 'Özel Sağlık Sigortası',
        value: 'ozel-sagilik-sigortasi',
        id: '12',
        Icon: FamilyUnderUbrella,
        isActive: true,
        title: 'Özel Sağlık Sigortası',
        explanation: '',
        isAutomated: false,
        visibleOnHomepage: false
    },
    {
        label: 'Türkiye’ye Seyahat Sigortası (Incoming)',
        value: 'incoming-seyahat-sagilik-sigortasi',
        id: '13',
        Icon: AirPlanWithChekmark,
        isActive: true,
        title: 'Türkiye’ye Seyahat Sigortası (Incoming)',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Yurt İçi Seyahat Sigortası',
        value: 'yurt-ici-seyahat-sigortasi',
        id: '14',
        Icon: Luggages,
        isActive: true,
        title: 'Türkiye’ye Seyahat Sigortası (Incoming)',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Hac ve umra',
        value: 'hac-ve-umra',
        id: '15',
        Icon: HacIcon,
        isActive: true,
        title: 'Hac ve umra',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Konut Sigortası',
        value: 'konut-sigortasi',
        id: '16',
        Icon: HacIcon,
        isActive: true,
        title: 'Konut Sigortası',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Evim Güvende',
        value: 'evim-guvende',
        id: '17',
        Icon: HacIcon,
        isActive: true,
        title: 'Evim Güvende',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Evcil Hayvan Sigortası',
        value: 'evcil-hayvan-sigortasi',
        id: '18',
        Icon: HacIcon,
        isActive: true,
        title: 'Evim Güvende',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    {
        label: 'Cep Telefon Sigortası',
        value: 'cep-telefon-sigortasi',
        id: '19',
        Icon: HacIcon,
        isActive: true,
        title: 'Evim Güvende',
        explanation: '',
        isAutomated: true,
        visibleOnHomepage: false
    },
    
]

export default InsurranceItems