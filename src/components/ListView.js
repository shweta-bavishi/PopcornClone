import React, { Component } from 'react';
import Card from './common/card';
class ListView extends Component {
    render() {
        let {array} = this.props;
        if (array) {
            return (
                <div className="row" key={this.props.id}>
                    {array.map((item) => {
                        return (
                            <Card
                                key={item._id}
                                id={item._id}
                                name={item.title}
                                image={item.images}
                                rating={item.rating}
                                torrent={item.torrents}
                                trailer={item.trailer}
                                synopsis={item.synopsis}
                                genres={item.genres}
                            />
                        );
                    })}
                </div>
            )
        }
        return null;
    }
}

export default ListView;