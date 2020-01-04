import React from 'react';
import Link from 'next/link';
class Header extends React.Component {


    render() {
        const title = this.props.title;

        return (
            <React.Fragment>
            <p>{ title }</p>
            {this.props.children}
            <p>Styled P elem</p>
            <Link href="/">
            <a style={{'fontSize': '20'}}>Home</a>
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
            <style jsx>
            {`
                a {
                    font-size: 20px;
                }
            `}
            </style>
            </React.Fragment>
        )
    }
}

export default Header;