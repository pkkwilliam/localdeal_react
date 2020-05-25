import React, { Component } from "react";
import View from '../../common/view';
import H1 from '../../common/h1';
import { styleSchema } from "../../common/stylesheet";
import { Button } from "@material-ui/core";
import BackgroundImage from '../../content/gooWhereBackground.jpg';

export default class GooWhereLandingPageView extends Component {
    render() {
        return <div  style={styles.rootContainer}><this.Header /><this.Description /><this.DownloadSection /></div>;
    }

    Description = () => {
        return <p style={styles.descriptionText}>GooWhere.com 現在提供一個免費的平台讓用戶或商戶發起活動. 此程式希望以可以讓現在的城市人獲得更多的機會參與Circle以外的活動, 更希望大家使用此程式創建運動活動, 如(籃球, 跑步)</p>
    }

    DownloadButton = ({imageUrl}: {imageUrl: string}) => {
         return  <View boxShadow={1} ><Button style={styles.downloadButton}><img src={imageUrl} style={styles.downloadImage} /></Button></View>
    }

    DownloadSection = () => {
        const downloadButtonImageUrls = ["https://raw.githubusercontent.com/pkkwilliam/pkkwilliam.github.io/master/Apple-App-Store.png", "https://raw.githubusercontent.com/pkkwilliam/pkkwilliam.github.io/master/Google-Play-Store.png"]
        const downloadButton = downloadButtonImageUrls.map(imageUrl => <this.DownloadButton imageUrl={imageUrl} />)
    return <View isFlexDirectionRow style={styles.downloadSectionContainer}>{downloadButton}</View>
    }

    Header = () => {
        return <View style={styles.headerContainer}><H1 style={styles.headerText} >GooWhere.com</H1></View>
    }

}

const styles = {
    descriptionText: {color: styleSchema.color.white},
    downloadButton: {borderRadius: 10, padding: 10},
    downloadImage: {height: 50, width: 180},
    downloadButtonText: {color: styleSchema.color.white, padding: 0, margin: 0, fontWeight: 600},
    downloadSectionContainer: {justifyContent: 'space-around', width: 'inherit'},
    headerContainer: {marginTop: 20},
    headerText: {color: styleSchema.color.white, fontSize: 56, fontWeight: "bold"},
    rootContainer: {backgroundImage: `url(${BackgroundImage})`, paddingLeft: 20, paddingRight: 20, width: styleSchema.dimension.FILL_ALL_WIDTH},

}