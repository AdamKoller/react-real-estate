import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Adam',
    }
    this.loopListings = this.loopListings.bind(this)
  }
loopListings () {
  const {listingsData} = this.props

  if(listingsData === undefined || listingsData.length === 0) {
    return "No results found"
  }

  return listingsData.map ((listing, index) => {
    if (this.props.globalState.view === 'grid') { // grid view
      return (<div className="col-md-3" key={index}>
        <div className="list">
          <div className="list-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
              </div>
              <div className='col-md-9'>
                <div className="user-details">
                  <span className="user-name">Mark Aurelius</span>
                  <span className="post-date">08/10/2019</span>
                </div>
                <div className="list-details">
                  <div className="floor-space">
                    <i className="fa fa-home"></i>
                    <span>{listing.floorSpace} ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listing.rooms} br</span>
                  </div>
                  <div className="baths">
                    <i className="fa fa-bath"></i>
                    <span>{listing.bath} ba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"><i className="fa fa-map-marker"></i>{listing.neighborhood},{listing.state}</span>
          </div>
        </div>
      </div>)
    } else { // horizontal view
      return (<div className="col-md-12 col-lg-6" key={index}>
        <div className="list">
          <div className="list-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3" style={{width:'40%',textAlign:'center',padding:'0px'}}>
                <div className="user-img" style={{height:'70px',width:'70px'}}></div>
              </div>
              <div className='col-md-9' style={{fontSize:'24px',width:'60%'}}>
                <div className="user-details" style={{marginLeft:'0px'}}>
                  <span className="user-name" style={{fontSize:'20px'}}>Mark Aurelius</span>
                  <span className="post-date" style={{fontSize:'20px'}}>08/10/2019</span>
                </div>
                <div className="list-details">
                  <div className="floor-space">
                    <i className="fa fa-home"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.floorSpace} ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.rooms} br</span>
                  </div>
                  <div className="baths">
                    <i className="fa fa-bath"></i>
                    <span style={{fontSize:'14px',textAlign:'center'}}>{listing.bath} ba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"><i className="fa fa-map-marker"></i>{listing.neighborhood},{listing.state}</span>
          </div>
        </div>
      </div>)
    }

  })
}
// function Listings() {
render () {
    return (
      <section id="listings">
        <section className="search-area">
          <div className="close-button">
            <i className="fa fa-times"></i>
          </div>
          <input type='text' name="search" placeholder="Search" onChange={this.props.change}/>
        </section>

        <section className="sort">
          <div className='main-results'>
            {this.props.globalState.filteredData.length} results found
          </div>
          <div className="sort-options">
            <select name="sort_by" className="sort_by" onChange={this.props.change}>
              <option value="price-descending">Lowest Price</option>
              <option value="price-ascending">Highest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-list-ul" onClick={this.props.changeView.bind(null,'box')}></i>
              <i className="fa fa-th" onClick={this.props.changeView.bind(null,'grid')}></i>
            </div>
          </div>
        </section>

        <section className="list-results">

        <div className='bottom-row'>
          {this.loopListings()}
        </div>
        </section>


        <section id="pagination">
            <ul className="pages">
              <li>Prev</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>Next</li>
            </ul>
        </section>

      </section>
  );
}
}

export default Listings;
