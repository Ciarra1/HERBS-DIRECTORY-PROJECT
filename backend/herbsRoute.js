import express, { Router } from 'express';
import { Herbs } from '../models/herbsModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.scientificName ||
            !request.body.placeToFind ||
            !request.body.preClinical ||
            !request.body.clinical ||
            !request.body.howToUse ||
            !request.body.references
        ) {
            return response.status(400).send({
                message: 'Answer all required fields',
            });
        }
        const newHerb = {
            scientificName: request.body.scientificName,
            placeToFind: request.body.placeToFind,
            preClinical: request.body.preClinical,
            clinical: request.body.clinical,
            howToUse: request.body.howToUse,
            references: request.body.references,
        };

        const herb = await Herbs.create(newHerb);

        return response.status(201).send(herb);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {

        const allHerbs = await Herbs.find({});

        return response.status(200).json({
            counts: allHerbs.length,
            data: allHerbs
        }
        );
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const idHerb = await Herbs.findById(id);

        return response.status(200).json(idHerb);
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.scientificName ||
            !request.body.placeToFind ||
            !request.body.preClinical ||
            !request.body.clinical ||
            !request.body.howToUse ||
            !request.body.references
        ) {
            return response.status(400).send({
                message: 'answer all required fields',
            });
        }
        const { id } = request.params;

        const result = await Herbs.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'directory not found' });
        }
        return response.status(200).send({ message: 'Directory updated successfully' });

    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })

    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Herbs.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: "Directory not found" });
        }

        return response.status(200).send({ message: 'Herb deleted successfully' });
    }
    catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;