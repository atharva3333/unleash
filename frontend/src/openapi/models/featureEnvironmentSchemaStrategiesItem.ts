/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.1
 */
import type { ConstraintSchema } from './constraintSchema';
import type { ParametersSchema } from './parametersSchema';

export type FeatureEnvironmentSchemaStrategiesItem = {
    id: string;
    featureName: string;
    projectId: string;
    environment: string;
    strategyName: string;
    sortOrder?: number;
    createdAt?: string;
    constraints: ConstraintSchema[];
    parameters: ParametersSchema;
};