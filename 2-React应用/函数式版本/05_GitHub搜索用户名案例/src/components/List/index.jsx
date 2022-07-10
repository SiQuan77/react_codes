import React from 'react'

export default function List(props){
    const {users,isFirst,isLoading,errorMsg} = props
    return (
      <div className="row">

        {
          isFirst ? <h1>Welcome!</h1> :
          isLoading ? <img id="loading" alt='loading' src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-11.gif" style={{width:'200px'}}></img> :
          errorMsg ? <h1>{errorMsg}</h1> :
          users.map((userObjs)=>{
            // 函数体
            return (
              <div className="card" key={userObjs.id}>
                <a href={userObjs.html_url} target="_blank" rel="noreferrer">
                  <img alt='avatar' src={userObjs.avatar_url} style={{width:'100px'}} />
                </a>
                <p className="card-text">{userObjs.login}</p>
              </div>
            )
          })
        }
      </div>
    )
}
