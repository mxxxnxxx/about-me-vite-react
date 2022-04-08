import React from 'react'
import AboutMe from '../../components/organisms/AboutMe'
export default function EnhancedAboutMe() {

    const q1 = {
        question: 'Q.    webとの出会いは ?',
        answer: "学生時代に課外活動とし街に繰り出してStreetSnapを撮影していました｡\n\n撮影は今でも続けていて､発表の場を考える中で必然的にwebに巡りあいました｡"
    }
    const q2 = {
        question: 'Q.    経歴は?',
        answer: "大きな流れとしては､\n\n作業療法士  →  アパレル販売  →  写真活動\n\n作業療法士では心理学や哲学への関心を得ました｡アパレルではデザインと身体性との関係性について学んだと感じています｡\n\n写真活動では作業療法士とアパレルで学んだことを実践し統合する経験を得ました｡"
    }
    const q3 = {
        question: 'Q.    どんなエンジニアを目指しているか?',
        answer: "これまで経験してきた作業療法士､アパレル､写真活動から心理学やデザイン(backend領域も含めて)の重要さを学びました｡\n\n誰がいつどのように誰と使うかを常に意識し､\n人間的なものが際立つテックを創造できるエンジニアになりたいと思っています｡"
    }
    const QA = [q1, q2, q3]
    return (
        <AboutMe QA={QA} />
    )
}