import * as React from 'react'
import imgManWithSoil from '../images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
    let [ doc, setDocument ] = React.useState(null)
    React.useEffect(() => {
        if (window) {
            setDocument(window.document)
        }
    }, [setDocument])
    return (
        <div>
            <section>
                <h1 className="text-red-300 font-bold ml-10 mt-10">
                    プチ農業の記録
                </h1>
                <div>
                    <p className="px-9 my-5">
                        子供の頃は、「大人になったら海外に行って英語を勉強して、同時通訳者になってやる！大きな家に住んで田んぼや畑ばっかりの日本とはおさらばや！（関西人です）」なんて考えていたのですが、やっぱり生まれ育った環境には不思議と呼び戻されるもので２０２０年にほぼ２０年住んだアメリカとおさらばし、日本に帰国しました。ここ数年年のせいか、昔はむさ苦しく感じていた田んぼや畑もすごく良いものだとしみじみと感じるようにもなり、たまたま近所で見つけたレジャー菜園を２０メートル程かりてプチ農業をしてみることにしました。このサイトはその記録を綴って自己満足に浸るものですので悪しからず。
                    </p>
                </div>
            </section>
            <section>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={imgManWithSoil} alt="Man looking at item at a store photo by Gabriel Jimenez on unsplash" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">畑耕すの巻</div>
                            {!doc ? null : <Link to="/blog1" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">簡単で単純作業に見えて意外と奥が深い。</Link>}
                            <p className="mt-2 text-gray-500">畑の土を耕すって掘れば良い話だろうと簡単に考えている人が多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを知りました。。。</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home