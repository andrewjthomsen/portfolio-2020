import React from 'react';
import Link from 'next/link';
class Index extends React.Component {
    render () {
        return (
            <div> <h1>I am Index Page from Class Component</h1>
            <Link href="/">
            <a href="/">Home</a>
            </Link>
            <Link href="/blogs">
            <a>Blogs</a>
            </Link>
            <Link href="/portfolio">
            <a>Portfolio</a>
            </Link>
            <Link href="/about">
            <a>About</a>
            </Link>
            <Link href="/cv">
            <a>Cv</a>
            </Link>
            </div>
        )
    }
}

export default Index;