import FORM_INFO from "./info.json";
import React, { PureComponent } from "react";
import _ from "lodash";

export default class IntentionScoreAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customFormData: FORM_INFO["customFormList"]
    };
  }

  renderBomNode(bom, inx) {
    if (bom.type === "OBJECT") {
      return (
        <div className="object" key={inx}>
          <p className="single-apply-title">
            {bom.display_name}
            {bom.is_array ? (
              <span>
                (最多添加{bom.max_count}个{bom.display_name})
              </span>
            ) : null}
          </p>
        </div>
      );
    }
    return null;
  }

  render() {
    const { customFormData } = this.state;

    return (
      <div>{_.map(customFormData, (bom, inx) => this.renderBomNode(bom,inx))}</div>
    );
  }
}
