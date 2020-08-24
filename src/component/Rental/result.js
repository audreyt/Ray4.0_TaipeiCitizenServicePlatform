import React from "react";
import SearchBar from "./searchbar/search2";
import RentalFilter from "./filter";
import VenueCard from "./venuecard";

import "./result.css";
import "./searchbar/search2.css";

class RentalResult extends React.Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
    this._costSort = this._costSort.bind(this);
    this._numberSort = this._numberSort.bind(this);
  }

  render() {
    return (
      <div>
        <div className="rentalresult">
          <section>
            <div className="s2_search_wrapper">
              <div className="s2_title">搜尋</div>
              <SearchBar setRentalSearch={this.props.setRentalSearch} />
            </div>
            <RentalFilter
              filter={this.props.filter}
              setRentalFilter={this.props.setRentalFilter}
            />
          </section>
          <section className="container">
            <div className="countresult">
              找到 {this.props.result.length} 筆結果
            </div>
            <div>
              <label>
                <input
                  name="價格"
                  type="checkbox"
                  onChange={() => {
                    this._costSort(0);
                  }}
                />
                價格由低到高
              </label>
              <label>
                <input
                  name="價格"
                  type="checkbox"
                  onChange={() => {
                    this._costSort(1);
                  }}
                />
                價格由高到低
              </label>
            </div>
            <div>
              <label>
                <input
                  name="人數"
                  type="checkbox"
                  onChange={() => {
                    this._numberSort(0);
                  }}
                />
                人數由低到高
              </label>
              <label>
                <input
                  name="人數"
                  type="checkbox"
                  onChange={() => {
                    this._numberSort(1);
                  }}
                />
                人數由高到低
              </label>
            </div>
            <div>{this._renderItems()}</div>
          </section>
        </div>
      </div>
    );
  }

  _numberSort(type) {
    const { result } = this.props;
    let r = result;
    if (!type) {
      r.sort((a, b) => {
        return a.number - b.number;
      });
    } else {
      r.sort((a, b) => {
        return b.number - a.number;
      });
    }
    this.props.setRentalResult(r);
  }

  _costSort(type) {
    const { result } = this.props;
    let r = result;
    if (!type) {
      r.sort((a, b) => {
        return a.cost - b.cost;
      });
    } else {
      r.sort((a, b) => {
        return b.cost - a.cost;
      });
    }
    this.props.setRentalResult(r);
  }

  _renderItems() {
    const { result } = this.props;
    let list = [];
    if (result !== []) {
      result.forEach((item, index) => {
        list.push(
          <VenueCard key={index} item={item} />
        );
      });
    } else {
      // 找不到
    }
    return list;
  }
}

export default RentalResult;
