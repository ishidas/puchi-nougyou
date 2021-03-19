import * as React from 'react'
import DirtsAndSpoutesSvg from '../images/dirtsandsproutes.svg'

const BlogOne = () => {

    return (
        <section>
            <h1　className="text-red-300 font-bold mt-10 text-center">簡単で単純作業に見えて意外と奥が深い</h1>
            <div　className="py-6">
                <img className="mx-auto" src={DirtsAndSpoutesSvg} alt="dirt pile with sproutes"/>
            </div>
            <p className="px-10">
            畑の土を耕すって掘れば良い話だろうと簡単に考えている人が私も含め多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを今回知りました。私はど素人のワナビーファーマーなのですが、ラッキーなことに、借りている畑の管理者の方が小さい頃から農業をしていて色々教えていただけると言うことなのでなんとも幸い。その方は、「昔は牛を使って耕していたんやでー」というくらいの熟練でいつもニコニコ技術を伝授してくださいます。
            </p>
            <p>
            
            </p>
        </section>
            
    )
}

export default BlogOne