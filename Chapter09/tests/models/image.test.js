/* global describe, beforeEach, it, expect */
/* jshint node:true */
'use strict';

var ImageModel = require('../../models/image');

describe('Image Model', ()=>{
    var image;

    beforeEach(()=>{
        image = new ImageModel({
            title: 'Test',
            description: 'Testing',
            filename: 'testfile.jpg'
        });
    });

    it('should have a mongoose schema', ()=>{
        expect(ImageModel.schema).to.be.defined;
    });

    describe('Schema', ()=>{
        it('should have a title string', ()=>{
            expect(image.title).to.be.defined;
        });
        it('should have a description string', ()=>{
            expect(image.description).to.be.defined;
        });
        it('should have a filename string', ()=>{
            expect(image.filename).to.be.defined;
        });
        it('should have a views number default to 0', ()=>{
            expect(image.views).to.be.defined;
            expect(image.views).to.equal(0);
        });
        it('should have a likes number default to 0', ()=>{
            expect(image.likes).to.be.defined;
            expect(image.likes).to.equal(0);
        });
        it('should have a timestamp date', ()=>{
            expect(image.timestamp).to.be.defined;
        });
    });

    describe('Virtuals', ()=>{
        describe('uniqueId', ()=>{
            it('should be defined', ()=>{
                expect(image.uniqueId).to.be.defined;
            });
            it('should get filename without extension', ()=>{
                expect(image.uniqueId).to.equal('testfile');
            });
        });
    });
});
