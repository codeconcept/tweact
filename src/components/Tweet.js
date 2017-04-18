import React from 'react';
import '../App.css';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import  frLocale from 'date-fns/locale/fr';

class Tweet extends React.Component {
    render() {
        // console.log(distanceInWordsToNow(new Date(this.props.date), {locale: frLocale}));
        return (
            <div className='vertical-spacer'>
                <div className='small'>
                    <b>{this.props.name}</b> &nbsp;
                    {this.props.handle}  &nbsp;
                    il y a {distanceInWordsToNow(new Date(this.props.date), {locale: frLocale})} &nbsp;
                </div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}

export default Tweet;