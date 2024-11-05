import ToothIcon from '@/assets/images/icons/tooth.svg'
import HairTransplantIcon from '@/assets/images/icons/hair-transplant.svg'
import EyeSurgeryIcon from '@/assets/images/icons/eye-surgery.svg'
import OrtopediIcon from '@/assets/images/icons/ortopedi.svg'
import HeartSurgeryIcon from '@/assets/images/icons/HeartSurgeryIcon.svg'

const sagilikTurizmiPlans = [
    {
        id: 0,
        key: 'dis-komplikasyon',
        plansInfo: [
            {
                "VerNo": "006",
                "PlanNo": 1,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "DİŞ KOMPLİKASYONU PLANI(KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 10,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "DİŞ KOMPLİKASYONU PLANI",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 19,
                "Kod": "T",
                "Gun": "365",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "DİŞ İMPLANT PLANI (KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 20,
                "Kod": "T",
                "Gun": "365",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "DİŞ İMPLANT PLANI",
                "DefaultNetwork": "115"
            }
        ],
        label: 'DİŞ KOMPLİKASYONU PLANI',
        Icon: ToothIcon
    },
    {
        id: 1,
        key: 'sac-ekimi',
        plansInfo: [
            {
                "VerNo": "006",
                "PlanNo": 6,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "SAÇ EKİMİ KOMPLİKASYONU PLANI(KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 11,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "SAÇ EKİMİ KOMPLİKASYONU PLANI",
                "DefaultNetwork": "115"
            },
        ],
        label: 'SAÇ EKİMİ KOMPLİKASYONU PLANI',
        Icon: HairTransplantIcon
    },
    {
        id: 2,
        key: 'goz-komplikasyon',

        plansInfo: [
            {
                "VerNo": "006",
                "PlanNo": 7,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "GÖZ KOMPLİKASYONU PLANI(KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 12,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "GÖZ KOMPLİKASYONU PLANI",
                "DefaultNetwork": "115"
            },
        ],
        label: 'GÖZ KOMPLİKASYONUPLANI',
        Icon: EyeSurgeryIcon
    },
    {
        id: 3,
        key: 'ortopedi',
        plansInfo: [
            {
                "VerNo": "006",
                "PlanNo": 8,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "ORTOPEDİ,JİNEKOLOJİ, GENEL CERRAHİ, EST(KÜM-REFAKATÇİ DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 13,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "ORTOPEDİ,JİNEKOLOJİ, GENEL CERRAHİ, EST(KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 15,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "ORTOPEDİ,JİNEKOLOJİ, GENEL CERRAHİ, EST",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 17,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "ORTOPEDİ,JİNEKOLOJİ, GENEL CERRAHİ, EST(REFAKATÇİ DAHİL)",
                "DefaultNetwork": "115"
            },
        ],
        label: 'ORTOPEDİ GENEL CERRAHİESTETİK',
        Icon: OrtopediIcon
    },
    {
        id: 4,
        key: 'kalp-cerrahi',
        plansInfo: [
            {
                "VerNo": "006",
                "PlanNo": 9,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "KALP CERRAHİ KOMPLİKASYONU PLANI(KÜM-REFAKATÇİ DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 14,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "KALP CERRAHİ KOMPLİKASYONU PLANI(KÜM DAHİL)",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 16,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "KALP CERRAHİ KOMPLİKASYONU PLANI",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 16,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "KALP CERRAHİ KOMPLİKASYONU PLANI",
                "DefaultNetwork": "115"
            },
            {
                "VerNo": "006",
                "PlanNo": 18,
                "Kod": "T",
                "Gun": "180",
                "OdePlanSeq": 7738,
                "TarifeNo": "103",
                "Aciklama": "KALP CERRAHİ KOMPLİKASYONU PLANI(REFAKATÇİ DAHİL)",
                "DefaultNetwork": "115"
            },
        ],
        label: "KALP CERRAHİ KOMPLİKASYONU PLANI",
        Icon: HeartSurgeryIcon
    }
]



export default sagilikTurizmiPlans;