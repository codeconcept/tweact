import React from 'react';

class UserSummary extends React.Component {
    render() {
        return(
            <div>
                <div className="space-third">tweets</div>
                <div className="space-third">following</div>
                <div className="space-third">followers</div>
            </div>      
        )
    }
}

export default UserSummary;
