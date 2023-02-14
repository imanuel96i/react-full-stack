import React from 'react'

function Error() {
  return (
    <div style={{ display: "grid", justifyContent: "center", alignItems: "center", marginTop: "5%"}}>
      <div><h1>Error 404 Not Found</h1></div>
      <div><img src={require('./components/assets/img/error.jpg')} alt=''/></div>
    </div>
  )
}

export default Error