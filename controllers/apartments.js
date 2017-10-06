const 
    Apartment = require('../models/apartments.js')

    module.exports = {
        //index
        index: (req, res) => {
            Apartment.find({}, (err, apartments) => {
                if(err) return console.log(err)
                res.json(apartments)
            })
        },

        //create
        create: (req, res) => {
            var newApartment = new Apartment(req.body)
            newApartment.save((err, apartment) => {
                if(err) return console.log(err)
            res.json({success: true, message: "Apartment created!!", apartment: apartment})
            })
        },

        //show
        show: (req, res) => {
            Apartment.findById(req.params.id, (err, theApartment) => {
                res.json(theApartment)
            })
        },

        //update
        update: (req, res) => {
            Apartment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedApartment) => {
                res.json(updatedApartment)
            })
        },

        //destroy
        destroy: (req, res) => {
            Apartment.findByIdAndRemove(req.params.id, (err) => {
                if(err) return console.log(err)
                res.json({success: true, message: "Apartment was deleted."})
            })
        } 
        
    }    