const userRepository = require('./UserRepository')

class AppController {
    login(req, res) {
        const loginInfo = req.body
        console.log("app.post(/api/login).req.body", loginInfo)

        userRepository.login(loginInfo.username, loginInfo.password).then(user => {
                req.session.user = user
                res.redirect(req.session.prevUrl)
            })
            .catch(err => {
                console.log(err)
                res.render('login', { errMessage: err } )
            })
    }

    hala(req, res) {
        console.log('req.cookies.visitCount', req.cookies.visitCount)
        //If there is already an visitCount cookie then increment its value
        let visitCount = 1
        if (req.cookies.visitCount) {
            visitCount = parseInt(req.cookies.visitCount)
            visitCount++
        }

        //Return an visitCount cookie to the client -- expires is optional
        const expiresAfterMilliseconds = 1 * 360 * 1000  //1 hour
        res.cookie('visitCount', visitCount, { expires: new Date(Date.now() + expiresAfterMilliseconds ) })
        res.render('hala')
    }

    addItemToCart(req, res) {
        console.log('app.post(/shop)', req.body.item)
        if (req.session.shoppingCart) {
            req.session.shoppingCart.push( req.body.item )
        } else {
            req.session.shoppingCart = [ req.body.item ]
        }

        res.redirect('/shop')
    }

    logout(req, res) {
        req.session.destroy( () => {
            res.redirect('/')
        })
    }
}

module.exports = new AppController()
