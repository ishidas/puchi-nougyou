import * as React from 'react'
import imgManWithSoil from '../images/gabriel-jimenez-jin4W1HqgL4-unsplash.jpg'
import Aside from '../../components/Aside'
import BlogCard from '../../components/BlogCard'

const Home = () => {
    // let [ doc, setDocument ] = React.useState(null)
    // React.useEffect(() => {
    //     if (window) {
    //         setDocument(window.document)
    //     }
    // }, [setDocument])

    const blogs = [
        {
            chapter: '畑耕すの巻',
            title: '簡単で単純作業に見えて意外と奥が深い',
            linkSrc: imgManWithSoil,
            leading: '畑の土を耕すって掘れば良い話だろうと簡単に考えている人が多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを知りました。。。'
        },
        {
            chapter: '畑耕すの巻',
            title: '簡単で単純作業に見えて意外と奥が深い',
            linkSrc: imgManWithSoil,
            leading: '畑の土を耕すって掘れば良い話だろうと簡単に考えている人が多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを知りました。。。'
        },
        {
            chapter: '畑耕すの巻',
            title: '簡単で単純作業に見えて意外と奥が深い',
            linkSrc: imgManWithSoil,
            leading: '畑の土を耕すって掘れば良い話だろうと簡単に考えている人が多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを知りました。。。'
        },
        {
            chapter: '畑耕すの巻',
            title: '簡単で単純作業に見えて意外と奥が深い',
            linkSrc: imgManWithSoil,
            leading: '畑の土を耕すって掘れば良い話だろうと簡単に考えている人が多いと思いますが、大間違い。耕すだけでもすごく色々な技術があると言うことを知りました。。。'
        },
    ]

    const renderBlogs = () => {
        return blogs.map(({ title, chapter, linkSrc, leading }) => {
            return <BlogCard title={title} chapter={chapter} linkSrc={linkSrc} leading={leading}/>
        })
    }
    return (
            <div className="flex-col">
                <section className="flex-1">
                    <h1 className="text-red-300 font-bold ml-10 mt-10">
                        プチ農業の記録
                    </h1>
                    <div>
                        <p className="px-9 my-5">
                            子供の頃は、「大人になったら海外に行って英語を勉強して、同時通訳者になってやる！大きな家に住んで田んぼや畑ばっかりの日本とはおさらばや！（関西人です）」なんて考えていたのですが、やっぱり生まれ育った環境には不思議と呼び戻されるもので２０２０年にほぼ２０年住んだアメリカとおさらばし、日本に帰国しました。ここ数年年のせいか、昔はむさ苦しく感じていた田んぼや畑もすごく良いものだとしみじみと感じるようにもなり、たまたま近所で見つけたレジャー菜園を２０メートル程かりてプチ農業をしてみることにしました。このサイトはその記録を綴って自己満足に浸るものですので悪しからず。
                        </p>
                    </div>
                </section>
                <div className="flex flex-col-reverse md:flex-col md:flex-wrap">
                    <Aside />
                    <section className="md:flex-1">
                        <React.Fragment>
                        {renderBlogs()}
                        </React.Fragment>
                    </section>
                </div>
            </div>
    )
}

export default Home