/**
 * Created by vaibhav on 29/3/18
 */
import React, {Component} from "react";
import {generateShareIcon, ShareButtons, ShareCounts} from "react-share";
import config from "../../../data/config";
import "./style.css";

class ShareIcons extends Component {
    render() {
        const { post, postPath, mobile } = this.props;
        const post = post.frontmatter;
        const url = config.siteUrl + postPath;
        const {
            GooglePlusShareButton,
            LinkedinShareButton,
            TwitterShareButton,
            TelegramShareButton,
            RedditShareButton
        } = ShareButtons;
        const {
            GooglePlusShareCount,
            LinkedinShareCount,
            RedditShareCount
        } = ShareCounts;

        const TwitterIcon = generateShareIcon("twitter");
        const TelegramIcon = generateShareIcon("telegram");
        const GooglePlusIcon = generateShareIcon("google");
        const LinkedinIcon = generateShareIcon("linkedin");
        const RedditIcon = generateShareIcon("reddit");
        const iconSize = mobile ? 36 : 48;
        const filter = count => (count > 0 ? count : "");

        return (
            <div className="social-links">
                <RedditShareButton url={url} title={post.title}>
                    <RedditIcon round size={iconSize} />
                    <RedditShareCount url={url}>
                        {count =>
                            <div className="share-count">
                                {filter(count)}
                            </div>}
                    </RedditShareCount>
                </RedditShareButton>
                <TwitterShareButton url={url} title={post.title}>
                    <TwitterIcon round size={iconSize} />
                </TwitterShareButton>
                <GooglePlusShareButton url={url}>
                    <GooglePlusIcon round size={iconSize} />
                    <GooglePlusShareCount url={url}>
                        {count =>
                            <div className="share-count">
                                {filter(count)}
                            </div>}
                    </GooglePlusShareCount>
                </GooglePlusShareButton>
                <LinkedinShareButton
                    url={url}
                    title={post.title}
                    description={post.description}
                >
                    <LinkedinIcon round size={iconSize} />
                    <LinkedinShareCount url={url}>
                        {count =>
                            <div className="share-count">
                                {filter(count)}
                            </div>}
                    </LinkedinShareCount>
                </LinkedinShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon round size={iconSize} />
                </TelegramShareButton>
            </div>
        );
    }
}

export default ShareIcons;