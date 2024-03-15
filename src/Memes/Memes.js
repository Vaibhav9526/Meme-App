import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSwitch from '../component/PageSwitch';

export const Memes = (props) => {
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [Memes]);

    const MemeArray = {
        meme1: '(╯°□°）╯︵ ┻━┻',
        meme2: '┻━┻ ︵ ヽ(°□°ヽ)',
        meme3: '┻━┻ ︵ ヽ(°□°ヽ)',
        meme4: '┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻',
        meme5: '(ﾉಥ益ಥ）ﾉ ┻━┻',
        meme6: '(╯°Д°）╯︵ /(.□ . \)',
        meme7: 'ʕノ•ᴥ•ʔノ ︵ ┻━┻',
        meme8: 'ಠ_ಠ',
        meme9: '∩┐(◣_◢)┌∩┐',
        meme10: 'ლ(ಠ益ಠ)ლ',
        meme11: '(ง’̀-‘́)ง',
        meme12: '(ಠ_ಠ)',
        meme13: '╭∩╮（︶︿︶）╭∩╮',
        meme14: '(ᵔᴥᵔ)',
        meme15: '(=^ェ^=)',
        meme16: 'ʕ •ᴥ•ʔ',
        meme17: '（・⊝・）',
        meme18: '=＾● ⋏ ●＾=',
        meme19: '( 。・_・。)人(。・_・。 )',
        meme20: '└(^o^ )Ｘ( ^o^)┘',
        meme21: '(✿◠‿◠)',
        meme22: '(｡◕‿◕｡)',
        meme23: 'ヽ༼ຈل͜ຈ༽ﾉ',
        meme24: 'づ｡◕‿‿◕｡)づ',
        meme25: '~(˘▾˘~)',
        meme26: 'ヘ( ^o^)ノ＼(^_^ )',
        meme27: '(. ❛ ᴗ ❛.)',
        meme28: '( ͡ᵔ ͜ʖ ͡ᵔ )',
        meme30: '☉_☉',
        meme31: '¯\(°_o)/¯',
        meme32: '(゜-゜)',
        meme33: '(・_・ヾ',
        meme34: 'o_O',
        meme35: '(¬_¬)',
        meme36: '( ͡° ʖ̯ ͡°)',
        meme37: '╮ (. ❛ ᴗ ❛.) ╭',
        meme39: '•_•) ( •_•)⌐■-■ (⌐■_■)',
        meme40: '(▀̿Ĺ̯▀̿ ̿)',
        meme41: '︻デ═一',
        meme42: '╾━╤デ╦︻(˙ ͜ʟ˙ )',
        meme43: '╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)',
        meme44: '(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-',
        meme45: '( ͡° ͜ʖ ͡°)︻̷┻̿═━一-',
        meme46: '╾━╤デ╦︻( ▀̿ Ĺ̯ ▀̿├┬┴┬',
    }

    const Alert = () => {
        props.showAlert('Text Copied', 'success')
    }
    return (
        <>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>Update : </strong> New Meme Page.
                <Link to='/meme2'><button className='btn btn-primary'>Next Page</button></Link>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="Home">
                <h1>StickArtly</h1>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="memeDisplay my-5">
                    <h2>The Table Flipping Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>(╯°□°）╯︵ ┻━┻</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme1); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>┻━┻ ︵ ヽ(°□°ヽ)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme2); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme3); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>┬─┬ノ( º _ ºノ)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme4); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(ﾉಥ益ಥ）ﾉ ┻━┻</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme5); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(╯°Д°）╯︵ /(.□ . \)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme6); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>ʕノ•ᴥ•ʔノ ︵ ┻━┻</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme7); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>Angry Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>ಠ_ಠ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme8); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>┌∩┐(◣_◢)┌∩┐</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme9); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>ლ(ಠ益ಠ)ლ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme10); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(ง’̀-‘́)ง</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme11); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(ಠ_ಠ)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme12); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>╭∩╮（︶︿︶）╭∩╮</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme13); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>Animal Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>(ᵔᴥᵔ)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme14); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(=^ェ^=)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme15); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>ʕ •ᴥ•ʔ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme16); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>（・⊝・）</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme17); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>=＾● ⋏ ●＾=</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme18); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>Happy Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>( 。・_・。)人(。・_・。 )</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme19); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>└(^o^ )Ｘ( ^o^)┘</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme20); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(✿◠‿◠)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme21); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(｡◕‿◕｡)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme22); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>ヽ༼ຈل͜ຈ༽ﾉ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme23); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(づ｡◕‿‿◕｡)づ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme24); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>~(˘▾˘~)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme25); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>ヘ( ^o^)ノ＼(^_^ )</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme26); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(. ❛ ᴗ ❛.)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme27); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>( ͡ᵔ ͜ʖ ͡ᵔ )</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme28); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>WTF Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>☉_☉</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme30); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>¯\(°_o)/¯</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme31); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(゜-゜)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme32); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(・_・ヾ</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme33); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>o_O</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme34); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(¬_¬)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme35); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>( ͡° ʖ̯ ͡°)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme36); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>╮ (. ❛ ᴗ ❛.) ╭</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme37); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>Deal With It Text Emoticons</h2>
                    <br /><br /><br />
                    <h3>•_•) ( •_•)⌐■-■ (⌐■_■)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme39); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(▀̿Ĺ̯▀̿ ̿)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme40); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h2>Gun Lenny Faces</h2>
                    <br /><br /><br />
                    <h3>︻デ═一</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme41); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>╾━╤デ╦︻(˙ ͜ʟ˙ )</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme42); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme43); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme44); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>( ͡° ͜ʖ ͡°)︻̷┻̿═━一-</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme45); Alert() }}>Copy</button>
                    <br /><br /><br />
                    <h3>╾━╤デ╦︻( ▀̿ Ĺ̯ ▀̿├┬┴┬</h3>
                    <button className="MyBtn" onClick={() => { navigator.clipboard.writeText(MemeArray.meme46); Alert() }}>Copy</button>
                </div>
                <br /><br />
                <PageSwitch></PageSwitch>
            </div>
        </>
    )
}

export default Memes;
